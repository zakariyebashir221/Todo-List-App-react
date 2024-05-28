// import React, { useCallback, useContext } from 'react';
// import TodoContext from '../context/TodoProvider';


// function TodoFilter() {
//  const {dispatch , state}= useContext(TodoContext)
//   // const {  filter } = state;

//   // const setFilter = useCallback((filter) => {
//   //   dispatch({ type: 'SET_FILTER', payload: filter });
//   // }, [dispatch]);
//   const setFilter = useCallback((filter) => {
//     dispatch({ type: 'SET_FILTER', payload: filter });
//   }, [dispatch]);

//   return (
//     // <div className="flex justify-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg">
//     //   <button
//     //     onClick={() => setFilter('ALL')}
//     //     className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
//     //       filter === 'ALL' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
//     //     }`}
//     //   >
//     //     All
//     //   </button>
//     //   <button
//     //     onClick={() => setFilter('ACTIVE')}
//     //     className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
//     //       filter === 'ACTIVE' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
//     //     }`}
//     //   >
//     //     Active
//     //   </button>
//     //   <button
//     //     onClick={() => setFilter('COMPLETED')}
//     //     className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
//     //       filter === 'COMPLETED' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
//     //     }`}
//     //   >
//     //     Completed
//     //   </button>
//     // </div>
//     <div className="todo-filter">
//       <button
//         className={state.filter === 'all' ? 'active' : ''}
//         onClick={() => setFilter('all')
   
//         }
//       >
//         All
//       </button>
//       <button
//         className={state.filter === 'completed' ? 'active' : ''}
//         onClick={() => setFilter('completed')}
//       >
//         Completed
//       </button>
//       <button
//         className={state.filter === 'incomplete' ? 'active' : ''}
//         onClick={() => setFilter('incomplete')}
//       >
//         Incomplete
//       </button>
//     </div>
//   );
// }

// export default TodoFilter;

import React, { useCallback, useContext } from 'react';
import TodoContext from '../context/TodoProvider';

function TodoFilter() {
    const { state, dispatch } = useContext(TodoContext);

    const setFilter = useCallback((filter) => {
        dispatch({ type: 'SET_FILTER', payload: filter });
    }, [dispatch]);

    return (
        <div className="flex justify-center space-x-4 p-4 bg-gray-50 shadow-md rounded-lg">
            <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
                    state.filter === 'all' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
                }`}
            >
                All
            </button>
            <button
                onClick={() => setFilter('incomplete')}
                className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
                    state.filter === 'incomplete' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
                }`}
            >
               Active
            </button>
            <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg font-semibold transition duration-150 ${
                    state.filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'
                }`}
            >
                 Completed
            </button>
        </div>
    );
}

export default TodoFilter;
