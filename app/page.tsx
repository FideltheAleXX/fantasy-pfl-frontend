import Footer from './components/Footer';
import HomeSidebar from './components/HomeSidebar';
import Header from './components/Header';
import MainFieldSection from './components/MainFieldSection';

export default function Home() {
  const navs = [
    { id: 1, title: 'Моя Команда' },
    { id: 2, title: 'Трансфери' },
    { id: 3, title: 'Очки' },
    { id: 4, title: 'Травми' },
    { id: 5, title: 'Статистика' },
  ];
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fdef] text-[#151614]">
      <Header />

      <main>
        <nav aria-label="Розділи" className="mb-6 border-b border-[#cbcfc3]">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navs.map((nav) => {
              return (
                <li key={nav.id} className="pb-3 text-[#55574f]">
                  {nav.title}
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-8 px-2 py-2 md:grid-cols-[1fr_2fr]">
          <HomeSidebar />
          <MainFieldSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
