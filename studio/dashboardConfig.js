export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff9e06c0b76295d44030d91',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ve9vgncx',
                  apiId: 'f920a430-2d69-4f9f-a818-2baca812de72'
                },
                {
                  buildHookId: '5ff9e06c5be517653ab1cea9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9d1gnay1',
                  apiId: '0c5d1f4e-d9f0-4bae-912a-f6a02a9e3b78'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/intecfrontend/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9d1gnay1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
