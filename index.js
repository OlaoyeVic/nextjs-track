const { parse } = require('url')
const express = require('express')
const next = require('next')
const { url } = require('inspector')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

async function main() {
    try {
        await app.prepare()

        const handle = app.getRequestHandler()
        const server = express()

        server
            .get('*', (req, res) => {
                const url = parse(req.url, true)
                handle(req, res, url)
            })
            .get('/', (req, res) => {
                res.send('hello world!')
            })
            .get('/about', (req, res) => {
                const { query } = parse(req.url, true)
                app.render(req, res, '/about', query)
            })
            .get('/api/greet', (req, res) => {
                res.json({ name: req.query?.name ?? 'unknown'})
            })
            .get(/_next\/.+/, (req, res) => {
                const parsedUrl = parse(req.url, true)
                handle(req, res, parsedUrl)
            })
            .listen(3000, () => console.log('server ready'))
    } catch (err) {
        console.log(err.stack)
    }
}

main()