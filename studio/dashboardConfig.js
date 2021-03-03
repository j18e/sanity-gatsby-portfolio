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
                  buildHookId: '603f95804f0e344c758c4992',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ps64ui2y',
                  apiId: 'a2b77df7-db4e-4bfa-8119-3818ea0c72d9'
                },
                {
                  buildHookId: '603f9580b8fa02686f54eba1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-n8h1yauq',
                  apiId: '7292bca0-6807-4eb7-ad72-b2c070bdf444'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/j18e/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-n8h1yauq.netlify.app',
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
