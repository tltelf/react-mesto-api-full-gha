function AuthPage({
  handleSubmit,
  handleChange,
  formValues,
  title,
  buttonText,
  children,
}) {
  return (
    <main className="content">
      <section className="auth">
        <h2 className="auth__title">{title}</h2>
        <form onSubmit={handleSubmit} className="popup__container-form">
          <label className="popup__container-form-label" htmlFor="email">
            <input
              className="popup__container-form-field popup__container-form-field_auth"
              placeholder="Email"
              required
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
          <label
            className="popup__container-form-label popup__container-form-label_auth"
            htmlFor="password"
          >
            <input
              className="popup__container-form-field popup__container-form-field_auth"
              placeholder="Пароль"
              required
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={formValues.password}
              onChange={handleChange}
            />
          </label>
          <button
            className="popup__container-form-button popup__container-form-button_auth"
            type="submit"
          >
            {buttonText}
          </button>
          {children}
        </form>
      </section>
    </main>
  );
}

export default AuthPage;
