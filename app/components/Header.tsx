import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  const menuItems = [
    { id: 1, title: 'Головна', link: '/' },
    { id: 2, title: 'Команди', link: '/teams' },
    { id: 3, title: 'Гравці', link: '/players' },
    { id: 4, title: 'Побажання', link: 'wishes' },
  ];
  return (
    <header className="border-b border-[#cbcfc3] bg-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[#343300]"
          aria-label="Фентезі Футбол — головна"
        >
          Фентезі Футбол
        </Link>

        <nav aria-label="Головна навігація">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {menuItems.map((item) => {
              return (
                <li key={item.id}>
                  <Button variant="secondary">
                    <Link href={item.link}>{item.title}</Link>
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
