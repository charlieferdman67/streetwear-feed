;(function() {
  const { createElement: h } = React;
  const { render } = ReactDOM;

  const posts = [
    {
      id: 1,
      title: 'Hypothesis',
      caption: `
Social Media Boost: Cities that are highly active on fashion‐related social media will have stronger streetwear scenes.
Distance Drag: Cities farther from NY, London, or Paris might have a weaker presence due to diffusion delays.
      `.trim(),
      likes: '1,128 likes',
      time: '2 HOURS AGO'
    },
    {
      id: 2,
      title: 'Social Media Activity vs Strength',
      image: 'images/scatter_social_vs_strength.png',
      caption: 'Clear upward trend: more online buzz links to stronger streetwear on the ground, with outliers like #Budapest.',
      likes: '2,304 likes',
      time: '3 HOURS AGO'
    },
    {
      id: 3,
      title: 'Distance vs Strength',
      image: 'images/scatter_distance_vs_strength.png',
      caption: 'Proximity helps, but digital connectivity lets distant cities like #Seoul thrive despite the miles.',
      likes: '1,896 likes',
      time: '4 HOURS AGO'
    },
    {
      id: 4,
      title: '3D View: All Variables',
      image: 'images/plot_3d.png',
      caption: 'Taller “towers” need either high social activity or closeness to fashion hubs—or both—to reach peak strength.',
      likes: '2,712 likes',
      time: '5 HOURS AGO'
    },
    {
      id: 5,
      title: 'Key Insights',
      caption: `
• Online Hype drives real-world payoff—social buzz almost always means more local style adoption.  
• Distance matters less in 2025—remote communities can flourish online.  
• Hometown Advantage still counts, but isn’t the only path.  
#streetwear #data
      `.trim(),
      likes: '3,105 likes',
      time: '6 HOURS AGO'
    },
    {
      id: 6,
      title: 'Conclusion',
      caption: `
Streetwear is now global: mix digital hype with local flavor. Wherever there’s an Internet connection and passion, culture spreads—distance is no barrier.
      `.trim(),
      likes: '4,001 likes',
      time: '7 HOURS AGO'
    }
  ];

  function Post({ p }) {
    return h('div', { className: 'post' }, [
      h('div', { className: 'post-header' }, [
        h('div', { className: 'avatar' }),
        h('div', { className: 'username' }, 'StreetwearData'),
        h('span', { className: 'material-icons more-icon' }, 'more_vert'),
      ]),
      p.image && h('img', { src: p.image, className: 'post-image' }),
      h('div', { className: 'post-actions' }, [
        h('span', { className: 'material-icons' }, 'favorite_border'),
        h('span', { className: 'material-icons' }, 'chat_bubble_outline'),
        h('span', { className: 'material-icons' }, 'send'),
        h('div', { className: 'spacer' }),
        h('span', { className: 'material-icons' }, 'bookmark_border')
      ]),
      h('div', { className: 'likes' }, p.likes),
      h('div', { className: 'post-caption' }, [
        h('strong', null, 'StreetwearData'),
        ' ', p.caption
      ]),
      h('div', { className: 'post-time' }, p.time)
    ]);
  }

  function App() {
    return h('div', { className: 'feed' },
      posts.map(p => h(Post, { key: p.id, p }))
    );
  }

  render(h(App), document.getElementById('root'));
})();
