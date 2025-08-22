'use client';
import { useState } from 'react';
import { Preparation } from '@/lib/sanity';

const tabs = ['Tea','Tincture','Capsule','Topical'] as const;

export default function PlantPreparation({ preparation }: { preparation?: Preparation }) {
  const [tab, setTab] = useState<'Tea'|'Tincture'|'Capsule'|'Topical'>('Tea');

  function Content() {
    if (tab==='Tea' && preparation?.tea) return (
      <div className="rounded-xl bg-[#F3EEE7] p-4">
        <p><b>Tea:</b> {preparation.tea.grams} in {preparation.tea.waterMl} hot water, steep {preparation.tea.minutes} min (covered).</p>
        <p className="mt-2"><b>Daily:</b> {preparation.tea.perDay}</p>
        {preparation.tea.notes && <p className="mt-2">{preparation.tea.notes}</p>}
      </div>
    );
    if (tab==='Tincture' && preparation?.tincture) return (
      <div className="rounded-xl bg-[#F3EEE7] p-4">
        <p><b>Tincture:</b> {preparation.tincture.ratio} – {preparation.tincture.drops}, {preparation.tincture.timesPerDay}.</p>
        {preparation.tincture.notes && <p className="mt-2">{preparation.tincture.notes}</p>}
      </div>
    );
    if (tab==='Capsule' && preparation?.capsule) return (
      <div className="rounded-xl bg-[#F3EEE7] p-4">
        <p><b>Capsule:</b> {preparation.capsule.mg}, {preparation.capsule.timesPerDay}.</p>
      </div>
    );
    if (tab==='Topical' && preparation?.topical) return (
      <div className="rounded-xl bg-[#F3EEE7] p-4">
        <p>{preparation.topical}</p>
      </div>
    );
    return <div className="rounded-xl bg-[#F3EEE7] p-4">No data.</div>;
  }

  return (
    <>
      <div className="flex gap-2 flex-wrap mt-4">
        {tabs.map(t => (
          <button key={t} onClick={()=>setTab(t)}
            className={`px-3 py-1 rounded-full border ${tab===t?'bg-[#E0D6C9]':'bg-white'}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="mt-4"><Content /></div>
      {preparation?.duration && <p className="mt-3 text-sm text-[#6E6A66]">{preparation.duration}</p>}
    </>
  );
}
