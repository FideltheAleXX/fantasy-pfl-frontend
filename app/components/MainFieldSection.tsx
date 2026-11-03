export default function MainFieldSection() {
  return (
    <section
      aria-label="Основне поле"
      className="rounded-2xl border border-(--card-bg) bg-white p-8"
    >
      <p className="mt-5 max-w-xl text-lg leading-8 text-[#55574f]">
        Створюй свою команду, обирай гравців і стеж за перебігом сезону.
      </p>
      <div
        role="img"
        aria-label="Футбольне поле"
        className="mt-5 aspect-3/2 w-full rounded-lg bg-(--field)"
      />
    </section>
  );
}
