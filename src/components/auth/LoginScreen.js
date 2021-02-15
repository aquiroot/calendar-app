import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin, startRegister } from '../../actions/auth';
import Swal from 'sweetalert2';

import './login.css';

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const [formLoginValues, handleLoginImputChange] = useForm({
		lEmail: 'damian@gmail.com',
		lPassword: '123456',
	});

	const { lEmail, lPassword } = formLoginValues;

	const [formRegisterValues, handleRegisterImputChange] = useForm({
		rName: 'Nando',
		rEmail: 'nando@gmail.com',
		rPassword: '123456',
		rPassword2: '123456',
	});

	const { rName, rEmail, rPassword, rPassword2 } = formRegisterValues;

	const handleLogin = (e) => {
		e.preventDefault();

		dispatch(startLogin(lEmail, lPassword));
	};

	const handleRegister = (e) => {
		e.preventDefault();

		if (rPassword !== rPassword2) {
			return Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error');
		}

		dispatch(startRegister(rName, rEmail, rPassword));
	};

	return (
		<>
			<div className="center">
				<h1>Calendario multiusuario</h1>
			</div>
			<div className="container login-container">
				<div className="row">
					<div className="col-md-6 login-form-1">
						<h3>Ingreso</h3>
						<form onSubmit={handleLogin}>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder="Correo"
									name="lEmail"
									value={lEmail}
									onChange={handleLoginImputChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control"
									placeholder="Contraseña"
									name="lPassword"
									value={lPassword}
									onChange={handleLoginImputChange}
								/>
							</div>
							<div className="form-group">
								<input type="submit" className="btnSubmit" value="Login" />
							</div>
						</form>
					</div>

					<div className="col-md-6 login-form-2">
						<h3>Registro</h3>
						<form onSubmit={handleRegister}>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									placeholder="Nombre"
									name="rName"
									value={rName}
									onChange={handleRegisterImputChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									placeholder="Correo"
									name="rEmail"
									value={rEmail}
									onChange={handleRegisterImputChange}
								/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control"
									placeholder="Contraseña"
									name="rPassword"
									value={rPassword}
									onChange={handleRegisterImputChange}
								/>
							</div>

							<div className="form-group">
								<input
									type="password"
									className="form-control"
									placeholder="Repita la contraseña"
									name="rPassword2"
									value={rPassword2}
									onChange={handleRegisterImputChange}
								/>
							</div>

							<div className="form-group">
								<input
									type="submit"
									className="btnSubmit"
									value="Crear cuenta"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
