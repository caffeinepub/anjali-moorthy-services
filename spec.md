# Anjali Moorthy Services

## Current State
The app has two pages: ServicesPage (/) and AboutPage (/about). The Navbar already includes a "Gallery" link but it currently only scrolls to a `#gallery` section on the home page which doesn't exist as a dedicated page. The routeTree only has `/` and `/about` routes.

## Requested Changes (Diff)

### Add
- New `GalleryPage.tsx` at `/gallery` route with a cinematic, dark-themed gallery of Anjali's choreography and filmmaking work
- Grid/masonry layout with category filters (All, Choreography, Filmmaking, Events)
- Lightbox/modal for full-screen image viewing
- Hero section at the top of the gallery page
- Smooth hover animations on gallery cards

### Modify
- `routeTree.tsx`: add `/gallery` route pointing to GalleryPage
- `Navbar.tsx`: update Gallery link to navigate to `/gallery` route instead of scrolling

### Remove
- Nothing removed

## Implementation Plan
1. Generate cinematic gallery images (choreography and filmmaking themed)
2. Create `GalleryPage.tsx` with hero, filter tabs, masonry grid, and lightbox modal
3. Update `routeTree.tsx` to include the gallery route
4. Update `Navbar.tsx` handleNavClick to route to `/gallery` for the gallery id
