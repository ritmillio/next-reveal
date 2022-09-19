
<br>
<p align="center">
	<h1 align="center">next-reveal</h1>
</p>
<p align="center">The easiest way to animate your Next.js app</p>
<p align="center"><a href="https://next-reveal.vercel.app/" align="center">Demo</a></p>

# Introduction
<strong>next-reveal makes it easy to add awesome scroll animations to your Next.js project.</strong>
### If you want to learn more about Scrollreveal.js the full documentation can be found at [https://scrollrevealjs.org](https://scrollrevealjs.org)
- 🐧 ⭐ If you like this project give me a Star ⭐ 🐧
# Installation
```bash
npm i next-reveal
```
or
```bash
yarn add next-reveal
```
# Usage

### RevealWrapper
You can animate single elements with RevealWrapper, just wrap your component inside RevealWrapper and base animate will be applied.

Base usage
```js
import RevealWrapper from  'next-reveal'
```
```html
<RevealWrapper>
	<h1  className={styles.title}>
		Welcome to <a  href="https://nextjs.org">Next.js!</a>
	</h1>
</RevealWrapper>
```
Custum animation
```html
<RevealWrapper rotate={{x:  12,y:40,z:0}} origin='left' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top:  25,  right:0,  bottom:  10,  left:5}}>
	<h1  className='text-blue-700 text-6xl leading-5 mt-36'>Welcome to <a  className='focus:underline active:underline hover:underline'  href="https://github.com/ritmillio/next-reveal">next-reveal!</a></h1>
	<p  className='text-sm mt-5 ml-2'>A package based on ScrollReveal</p>
</RevealWrapper>
```
### RevealList
You can animate multiple elements which will result a sequence animation.

Basic usage
*Note that in RevealList you need to specify at least the delay and interval*
```js
import RevealList from  'next-reveal'
```
```html
<RevealList interval={60} delay={500}  className='flex flex-wrap items-center justify-center'>
	<div className='bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2'></div>
	<div className='bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2'></div>
	<div className='bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2'></div>
	<div className='bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2'></div>
</RevealList>
```
*See live demo [next-reveal-site](https://next-reveal.vercel.app/)*

---
### Options/Animations

| Option                           | Type                    | Description                                                                                                                                                                          |
| ---------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `delay`                    | number                  | `delay` is the time before reveal animations begin.                                                                               |
| `distance`                            | string                  | `distance` controls how far elements move when revealed.                                                                                                                                                       |
| `duration`                     | number                  | `duration` controls how long animations take to complete.                                                               |
| `easing`                          | string | `easing` controls how animations transition between their start and end values.                                                                                                                    |
| `interval`                         | number | `interval` is the time between each reveal.                                                                                                                  |
| `opacity`                      | `number | null`                  | `opacity` specifies the opacity they have prior to being revealed.                                                                                                       |
| `origin`                      | string                  | `origin` specifies what direction elements come from when revealed.                                                                                                                                                        |
| `rotate`                      | object                  | `rotate` specifies the rotation elements have prior to being revealed.                                                                                                                                                        |
| `scale`                      | number                  | `scale` specifies the size of elements have prior to being revealed.                                                                                                                                                        |
| `desktop`                      | boolean                  | `desktop`  enables/disables animations on desktop browsers.                                                                                                                                                        |
| `mobile`                      | boolean                  | `mobile` enables/disables animations on mobile browsers.                                                                                                                                                        |
| `reset`                      | boolean                  | `reset` enables/disables elements returning to their initialized position when they leave the viewport. When `true` elements reveal each time they enter the viewport instead of once.                                                                                                                                                        |
| `useDelay`                      | string                  | `useDelay` specifies when values assigned to options.delay are used.                                                                                                                                                        |
| `viewFactor`                      | number                  | `viewFactor` specifies what portion of an element must be within the viewport for it to be considered visible.                                                                                                                                                        |
| `viewOffset`                      | object                  | `viewOffset` expands/contracts the active boundaries of the viewport when calculating element visibility.                                                                                                                                                        |

### Defaults
```js
const defaultRevealOptions  = {
delay:  350,
distance:  '50px',
duration:  650,
easing:  'cubic-bezier(0.5, 0, 0, 1)',
opacity:  0,
origin:  'top',
rotate: {
	x:  0,
	y:  0,
	z:  0,
},
scale:  1,
cleanup:  false,
desktop:  true,
mobile:  true,
reset:  false,
useDelay:  'always',
viewFactor:  0.0,
viewOffset: {
		top:  0,
		right:  0,
		bottom:  0,
		left:  0,
	},
}
```

### Prevent Flickering
If you experience Flickering you can create helper ```css``` class to make ```RevealWrapper``` element or ```RevealList``` items ```visibility:hidden``` which will prevent flickering.

#### Step 1: 
Create a ```_document.tsx``` file in your pages directory if you don't have one. Inside your ```_document.tsx``` file you need to add ```sr``` class to the ```Html``` tag

```js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en' className='sr'>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```
#### Step 2:
Add helper classes to your ```global.css``` file
 ```css
html.sr .load-hidden {
  visibility: hidden;
}
```
#### Step 3:
Add your ```load-hidden``` class to your elements where you use RevealWrapper or RevealList

```js
<RevealWrapper className="load-hidden" rotate={{x: 12,y:40,z:0}} origin='left' delay={200} duration={1000} distance='500px' reset={true} viewOffset={{top: 25, right:0, bottom: 10, left:5}}>
	<h1 className='text-blue-700 text-6xl leading-5 mt-36'>
		Welcome to <a className='focus:underline active:underline hover:underline' href="https://github.com/ritmillio/next-reveal">next-reveal!</a>
	</h1>
	<p className='text-sm mt-5 ml-2'>A package based on ScrollReveal</p>
</RevealWrapper>
```

```js
<RevealList interval={60} delay={500} className='flex flex-wrap items-center justify-center'>
	<div className='load-hidden bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2'></div>
	<div className='load-hidden bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2'></div>
	<div className='load-hidden bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2'></div>
	<div className='load-hidden bg-blue-400 h-12 w-12 xl:h-16 xl:w-16 m-2'></div>
</RevealList>
```

# License

Since this package is using Scrollreveal.js, in case of commercial use check out their [Commercial License](https://scrollrevealjs.org/pricing/)
