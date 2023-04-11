import fetch from "node-fetch";

export default async function handler(req, res) {
	const {url} = req.body

	let response = await fetch(url)
	if(response.ok) {
		const imageBuffer = await response.buffer()
		res.setHeader('Content-type', 'image/png')
		res.setHeader('Content-Disposition', 'attachment; filename="image.png' )
		res.send(imageBuffer)
	}
}