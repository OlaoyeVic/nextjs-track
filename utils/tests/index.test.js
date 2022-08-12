import { cutTextToLength, slugify, composeArticleSlug, extractArticleIdFromSlug } from '../index'

const str = "The quick brown fox jumps over the lazy dog"
const cut = cutTextToLength(str, 5);
console.log(cut === "The q...")

describe("cutTextToLength  cuts a string when it's too long", () => {
    test('Should cut a string that exceeds 10 characters', () => {
        const initialString = 'This is a 34 character long string'
        const cutResult = cutTextToLength(initialString, 10);
        expect(cutResult).toEqual('This is a ...')
    })

    test("Should not cut a string if it's a shorter than 10 characters",
        () => {
            const initialString = '7 chars'
            const cutResult = cutTextToLength(initialString, 10)
            expect(cutResult).toEqual('7 chars')
        }
    )
})

describe("slugify makes a string URL-safe", () => {
    test('Should convert a string to a URL-safe format', () => {
        const initialString = 'This is a string to slugify'
        const slugifiedString = slugify(initialString)
        expect(slugifiedString).toEqual('this-is-a-string-to-slugify')
    })
    test('Should slugify a string with special characters', () => {
        const initialString = 'This is a string to slugify!@#$%^&*()+'
        const slugifiedString = slugify(initialString)
        expect(slugifiedString).toEqual('this-is-a-string-to-slugify')
    })
})

describe("compose article slug", () => {
    test('Should create an URL for the article', () => {
        const id = 'a1363b56i'
        const title = "This is a title"
        const slugifiedArticle = composeArticleSlug(id, title)
        expect(slugifiedArticle).toEqual('this-is-a-title-a1363b56i')
    })
    test('Should create an article URL with special characters', () => {
        const title = 'This is a title!@#$%^&*()+'
        const id = 'a1363b56i'
        const slugifiedArticle = composeArticleSlug(id, title)
        expect(slugifiedArticle).toEqual('this-is-a-title-a1363b56i')
    })
})

describe("extract article id from slug", () => {
    test('Should extract the article id from the slug', () => {
        const articleSlug = 'this-is-a-title-a1363b56i'
        const id = extractArticleIdFromSlug(articleSlug)
        expect(id).toEqual('a1363b56i')
    })
})