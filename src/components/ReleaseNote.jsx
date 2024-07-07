import { useState, useEffect } from 'react';

const TYPES = ['Fix', 'Feature', 'Chore'];

export default function ReleaseNote ({ releaseNote }) {

  if(!releaseNote) return <></>;

  const [filter, setFilter] = useState(null);
  const [filteredChanges, setFilteredChanges] = useState(releaseNote.changes);

  useEffect(() => {

    if(!filter || filter === 'All') setFilteredChanges(releaseNote.changes);
    else setFilteredChanges(releaseNote.changes.filter(change => change.type === filter));

  }, [filter]);

  useEffect(() => {

    setFilter('All');

  }, [releaseNote]);

  return(
    <div className='flex flex-col p-6'>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-bold">Release {releaseNote.version}</h2>
        <Selectable items={['All', ...TYPES]} setItem={setFilter} item={filter} />

      </div>
        

      <span className='w-full h-0.5 bg-gray-200 my-5'></span>

      {/* Timeline */}
      <ol class="relative border-l-2 border-ui-green">    
        {
          filteredChanges.map((change, index) => 
          
            <li class="ms-6 mb-10 animate-fade-in" key={index}>            
              
              <span class="absolute mt-1 flex items-center justify-center w-3 h-3 bg-ui-green rounded-full -left-[7px] ring-4 ring-ui-green" />

              <h3 class="flex items-center text-lg sm:text-3xl font-bold sm:font-semibold mw-1/2 ">{ change.name }</h3>

              <div className='flex items-center'>

                <span class={`${change.type === 'Fix' ? 'bg-chips-lightyellow' : 'bg-chips-lightgreen'} ${change.type === 'Fix' ? 'text-chips-yellow' : 'text-chips-greeny'} text-md font-bold me-2 px-5 py-1 rounded-2xl my-3`} >{ change.type }</span>

                <time class="block text-md font-normal text-ui-gray ">{ new Date(change.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                }) }</time>

              </div>

              <p className="mb-4 text-ui-black sm:w-full" dangerouslySetInnerHTML={{ __html: change.description }}></p>

              <img src='https://img.freepik.com/vector-gratis/coleccion-kits-interfaz-usuario-colores-degradados_23-2149193698.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720224000&semt=ais_user' width={2048} height={1536} alt={change.name} className='w-96 sm:w-[45vw] rounded-3xl h-auto shadow-lg' />
          </li>
          )
        }              

      </ol>
    </div>
  )
};