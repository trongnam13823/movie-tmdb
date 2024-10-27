export default function Tab({ title, tabs, activeTab, setActiveTab }) {
  return (
    <div className='flex items-center gap-6 mb-8'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      {tabs && (
        <ul className='flex rounded border border-white'>
          {tabs.map((tab) => (
            <li
              key={tab.url}
              className={`h-full cursor-pointer rounded px-4 py-1 text-lg capitalize ${
                tab.url === activeTab.url ? 'bg-white text-black' : 'bg-black text-white hover:bg-white/20'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
