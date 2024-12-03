/*To talk with database and api's  
const asyncHandler = (fun) => () => {} */

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next);
    };
};

export { asyncHandler };












// const asyncHandler = (fn) => async (req, res, next) => {
    // The asyncHandler function returns an asynchronous function (req, res, next) => {}. This is the actual middleware function that gets passed to Express routes.
//     try {
//        await fn(req, res, next) 
//     } catch (error) {
//         res.status(err.code || 500).json({
//         success: false, 
//         message: err.message
//         })   
//     }
// }