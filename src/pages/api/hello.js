import { establishConnection } from "@/utils/establishConnection"
export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ 'message': 'POST request sent' } )
  }
  if (req.method === 'GET') {
    establishConnection()
    res.status(200).json({ 'message': 'GET request sent' } )
  }
}
