# Mobile Tab Navigation

<img width="1400" alt="Screenshot" src="images/screenshot.png">

#### project notes

1. HTML

- img
- font awesome
- Home / Work / Blog / About Us

2. CSS

- hover

3. JavaScript

- click event listener

- Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML

- didn't wrap imgs in a seperate div
- nav tag for navigation + ul, li

2. CSS

- hide images using opacity + transition: opacity

3. JavaScript

```
listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    deactivate images and btns()

    item.classList.add('active)
    contents[idx].classList.add('active')
  })
})
```
