'use client';

import { useState } from 'react';
import { Plus, RotateCcw, Search, X } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

export type HomeSidebarPlayer = {
  id: string;
  displayName: string;
  price: string;
};

type HomeSidebarProps = {
  players?: HomeSidebarPlayer[];
  initialSelectedPlayerIds?: string[];
};

export default function HomeSidebar({
  players = [],
  initialSelectedPlayerIds = [],
}: HomeSidebarProps) {
  const [selectedPlayerIds, setSelectedPlayerIds] = useState(
    () => new Set(initialSelectedPlayerIds),
  );

  function togglePlayer(playerId: string) {
    setSelectedPlayerIds((current) => {
      const next = new Set(current);
      if (next.has(playerId)) {
        next.delete(playerId);
      } else {
        next.add(playerId);
      }
      return next;
    });
  }

  return (
    <aside className="rounded-2xl border border-(--color-base-300) bg-white p-6">
      <div className="text-2xl">Вибір гравця</div>
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          aria-label="Пошук"
          className="pl-9"
          placeholder="Пошук"
          type="search"
        />
      </div>
      <Button
        type="button"
        variant="outline"
        onClick={() => setSelectedPlayerIds(new Set())}
      >
        <RotateCcw aria-hidden="true" />
        Відмінити
      </Button>
      <div className="mt-4 grid grid-cols-[auto_minmax(0,1fr)_auto_auto] items-center gap-3">
        <div>Info</div>
        <div>Name of player</div>
        <div>Suma</div>
        <div>Choice</div>
        {players.map((player) => {
          const isSelected = selectedPlayerIds.has(player.id);

          return (
            <div
              className="contents"
              key={player.id}
            >
              <div aria-hidden="true" />
              <div>{player.displayName}</div>
              <div>{player.price}</div>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                aria-label={
                  isSelected
                    ? `Скасувати вибір: ${player.displayName}`
                    : `Вибрати: ${player.displayName}`
                }
                aria-pressed={isSelected}
                onClick={() => togglePlayer(player.id)}
              >
                {isSelected ? (
                  <X aria-hidden="true" />
                ) : (
                  <Plus aria-hidden="true" />
                )}
              </Button>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
