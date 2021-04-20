import { articles } from '../../../data'

export default function handler(res, req) {
    req.status(200).json(articles)
}
