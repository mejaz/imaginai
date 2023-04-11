import {Configuration, OpenAIApi} from "openai"

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
	const {prompt, size} = req.body

	if (!configuration.apiKey) {
		return res.status(500).json({
			error: {
				message: "api key missing!"
			}
		})
	}

	if(prompt.trim().length === 0 || size.trim().length === 0) {
		return res.status(400).json({
			error: {
				message: "prompt or image size missing"
			}
		})
	}

	try {
		let response = await openai.createImage({
			prompt,
			n: 5,
			size,
			user: "test 123"
		})

		return res.send({data: response.data.data})

	} catch (error) {
		console.log(error)
		return res.status(400).json({
			error: {
				message: error.message
			}
		})
	}
}