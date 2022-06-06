Drupal.behaviors.responsiveEmbeddedVideos = {
  attach(context) {
    // List of Video Vendors embeds you want to support
    const players = context.querySelectorAll(
      'iframe[src*="youtube.com"]',
      'iframe[src*="vimeo.com"]',
    );

    // If there are videos on the page...
    if (players) {
      // Loop through videos
      Array.from(players).forEach((player) => {
        // Get Video Information
        const width = player.getAttribute('width');
        const height = player.getAttribute('height');
        const aspectRatio = height / width;
        const parentDiv = player.parentNode;

        parentDiv.style.paddingBottom = `${aspectRatio * 100}%`;

        // Clear height/width from fitVid
        player.removeAttribute('height');
        player.removeAttribute('width');
      });
    }
  },
};
