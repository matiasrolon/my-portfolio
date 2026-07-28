export default function Profile({ t }) {
  return (
    <section className="section" id="profile">
      <h2 className="section__title">// {t.profile.label}</h2>
      <div className="profile__body">
        {t.profile.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
