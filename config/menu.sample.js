const menu = [
  { type: 'config', id: 'news' },
  // { type: 'config', id: 'live' },
  {
    type: 'nolink',
    backgroundColor: '#f9dc00',
    color: '#ab080e',
    title: 'Billetterie',
    children: [
      { type: 'config', backgroundColor: '#f9dc00', color: '#ab080e', id: 'tickets' },
      { type: 'config', backgroundColor: '#f9dc00', color: '#ab080e', id: 'staticTickets' }
    ]
  },
  { type: 'config', id: 'staticTickets' },
  // { type: 'page', title: 'Pass\'Bar', id: 2822, link: '/passbar' },
  // { type: 'external', title: 'ESL Pro League', color: '#FFFF00', backgroundColor: '#FF0000', link: 'https://pro.eslgaming.com/occitanie/' },
  { type: 'config', id: 'tournaments' },
  {
    type: 'nolink',
    title: 'Infos',
    children: [
      { type: 'config', id: 'info' },
      // { type: 'config', id: 'schedule' },
      { type: 'page', title: 'Inscriptions', id: 199268, link: '/inscriptions' },
      { type: 'config', id: 'exhibitors' },
      { type: 'config', id: 'family' },
      { type: 'config', id: 'influencers' },
      { type: 'external', title: 'Une page externe', link: 'https://www.bmagic.fr' },
      // { type: 'page', title: 'Une page', id: 1246, link: '/grand-poitiers' },
      { type: 'page', title: 'Cosplay', id: 2673, link: '/cosplay' }
      // { type: 'page', title: 'Les Offs', id: 2727, link: '/offs' }
    ]
  },
  { type: 'config', id: 'partners' }
]

module.exports = menu
