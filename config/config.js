const config = {
  title: 'Gamers Assembly : Dev Front',
  logo: '/static/img/logo-orange-100x100.png',
  description: 'Retrouvez la Gamers Assembly prochainement',
  metaImagePath: '/static/img/logo-orange-200x200.png',
  gaTrackingId: 'UA-0000000-0',
  mainPartner: {
    logo: '/static/img/charente-maritime.png',
    url: 'https://bmagic.fr'
  },
  home: {
    hero: {
      title: 'Gamers Assembly',
      subtitle: 'Dev Front',
      background: '/static/img/bg-blue-area.jpg'
    },
    banner: '/static/img/bg-banner-al2018.jpg',
    twitterAccount: 'GamersAssembly',
    partners: {
      active: true,
      delay: 10,
      count: 6
    }
  },
  news: {
    title: 'Actualités',
    description: 'Retrouvez toutes les actualités de la Gamers Assembly',
    link: '/news'
  },
  partners: {
    title: 'Partenaires',
    description: 'Retrouvez la liste de tous nos partenaires',
    link: '/partenaires'
  },
  tournaments: {
    title: 'Tournois',
    description: 'Tous les tournois de la Gamers Assembly',
    link: '/tournois'
  },
  info: {
    title: 'Venir à la GA',
    description: 'Toutes les informations sur cet évènement',
    link: '/infos'
  },
  schedule: {
    title: 'Programme',
    description: 'Le programme heure par heure pour tout l\'évènement',
    link: '/schedule'
  },
  live: {
    title: 'Live',
    description: 'Tous les streams et résultats en direct',
    link: '/live'
  },
  tickets: {
    title: 'Billetterie',
    description: 'Achetez vos places pour la Gamers Assembly',
    link: '/billetterie',
    pass: {
      title: 'Pass "Manager/Accompagnateur"',
      text: 'Pour obtenir des pass "Manager/Accompagnateur", les équipes inscrites aux tournois peuvent réaliser une demande via le lien ci-dessous.',
      button: 'Obtenir un pass'
    },
    minor: {
      title: 'Informations pour les mineurs',
      text: 'Vous devez télécharger l\'autorisation parentale, l\'imprimer, la remplir et l\'apporter le jour de votre venue avec votre billet.',
      button: 'Télécharger l\'autorisation parentale (format pdf)'
    },
    rules: {
      title: 'Règlement intérieur',
      text: 'L\'acquisition d\'un ticket entraîne l\'adhésion au règlement intérieur disponible ci-dessous.',
      button: 'Télécharger le règlement intérieur (format pdf)'
    }
  },
  exhibitors: {
    title: 'Exposants',
    description: 'Les exposants que vous pourrez retrouver à la Gamers Assembly',
    link: '/exposants'
  },
  family: {
    title: 'Espace Famille',
    description: 'Les activités à faire en famille durant la Gamers Assembly',
    link: '/espace-famille'
  },
  influencers: {
    title: 'VIPs',
    description: 'Les personnalités qui seront présentes pour la Gamers Assembly',
    link: '/vips'
  },
  contact: {
    active: true,
    pageId: 6
  },
  press: {
    active: true,
    pageId: 7
  },
  legals: {
    active: true,
    pageId: 8
  },
  recruit: {
    active: true,
    title: 'Recrutement',
    description: 'Devenir bénévole pour la GAMERS ASSEMBLY, c\'est par ici !!!',
    formUrl: 'https://goo.gl/forms/84pHQfSp50RcuUel2'
  },
  social: {
    twitter: 'https://twitter.com/GamersAssembly',
    facebook: 'https://www.facebook.com/GamersAssembly',
    twitch: 'https://www.flickr.com/photos/futurolan',
    youtube: 'https://twitch.tv/gamers_assembly',
    flickr: 'https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw',
    discord: 'https://discordapp.com/invite/gamersassembly'
  }
}

module.exports = config
