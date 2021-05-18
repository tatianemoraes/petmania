export default function HeaderAuth(token) {
  return {
    'Content-Type':  'application/json',
    'Authorization':  `Bearer ${token}` 
  }
}


