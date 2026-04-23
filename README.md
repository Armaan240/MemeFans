<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bc98f6aa-2813-447f-af3f-6aeade86085a" /><img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/eaec2c55-c2a4-4f44-ba91-76ce4882535b" /># MemeFans
the worst meme page ever on the internet idk why i made it but yeah it looks good enough hopefully will do more changes :P

## Optimization

### Lazy Loading
Used `loading="lazy"` for images so they load only when visible.

**Result:** Faster page load and less data usage.

### Browser Caching
Used versioning like `image.gif?v=1` so browser caches images.

**Result:** Faster reload and fewer network requests.

### Optimized Layout
Limited to 6 memes per page (3 columns × 2 rows).

and i used tailwind css which is easy to understand and with this everythings was done in a single file so no need for a nother css file :)

### New Btn For random Meme (Optimized)
It doesn’t use fetch, so it avoids extra network work and runs faster
The button is disabled while downloading, so no multiple clicks happen
The button always resets properly, so it never gets stuck
Code is small and simple, so it runs quickly
No unnecessary elements are added to the page
