'use strict';

export default (store) => (next) => (action) => {
    //console.debug(action);
    return next(action);
}

// ES5 middleware
// export default function (store){
//     return function (next) {
//         return function (action) {
//           console.log('action');
//           return next(action);
//         };
//     };
// };
