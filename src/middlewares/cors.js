import cors from 'cors'

export const corsMiddleware = () => cors();


// const ACCEPTED_ORIGINS = [
//   'http://localhost:8080',
//   'http://localhost:3000',
//   'https://localhost:4321',
// ]

// export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
//   origin: (origin, callback) => {
//     if (acceptedOrigins.includes(origin)) {
//       return callback(null, true)
//     }

//     if (!origin) {
//       return callback(null, true)
//     }

//     return callback(new Error('Not allowed by CORS'))
//   }
// })
