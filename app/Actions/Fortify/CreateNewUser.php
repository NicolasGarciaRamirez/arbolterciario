<?php
namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;
use Illuminate\Validation\ValidationException;


class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
            'patrocinador_id' => ['required', 'exists:users,id'],
        ])->validate();

		return DB::transaction(function () use ($input) {
			$sponsor = User::find($input['patrocinador_id']);
	
			// Determinar el nivel inicial para buscar espacio disponible
			$startingLevel = $sponsor->level + 1;
			$level = $startingLevel;
	
			while (true) {
				// Verificar si el sponsor ha alcanzado el límite en este nivel
				if ($this->hasReferralLimitReached($sponsor, $level)) {
					$level++;
				} else {
					// Encontrar un lugar disponible en este nivel
					$referralsAtLevel = $this->getReferralsAtLevel($sponsor, $level);
	
					// Buscar el primer lugar disponible en el nivel
					$availableReferral = $referralsAtLevel->first(function ($user) use ($level) {
						return $user->referidos->where('level', $level)->count() < 3;
					});
	
					if ($availableReferral) {
						// Colocar al nuevo usuario en uno de los lugares disponibles
						$user = User::create([
							'name' => $input['name'],
							'email' => $input['email'],
							'password' => Hash::make($input['password']),
							'patrocinador_id' => $input['patrocinador_id'],
							'level' => $level,
						]);
	
						return $user;
					}
				}
	
				// Si no se encuentra espacio disponible en este nivel, continuar con el siguiente nivel
				$level++;
				
				// Si llegamos al nivel 10 (por ejemplo), puedes agregar una lógica para manejar esto según tus necesidades.
				if ($level > 10) {
					throw ValidationException::withMessages([
						'patrocinador_id' => ['No hay espacio disponible en ningún nivel.'],
					]);
				}
			}
		});
    }

    private function getReferralsAtLevel($user, $level)
	{
		// Obtener todos los referidos en el mismo nivel que el usuario
		return $user->referidos->where('level', $level);
	}
	
	private function hasReferralLimitReached($user, $level)
    {
        // Count the number of referrals at the same level as the sponsor
        $referralCount = $user->referidos->where('level', $level)->count();

        // Check if the sponsor has reached the maximum of 3 referrals at this level
        return $referralCount >= 3;
    }