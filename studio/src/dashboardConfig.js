export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f3af6ab9aa16b636e8adf2c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-48ph3bp5',
                  apiId: 'fbcc1577-9475-49a9-ba1b-044da90aff4c'
                },
                {
                  buildHookId: '5f3af6abfdb9c55ba99b60f2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-pbzeheo2',
                  apiId: 'eaded648-6b00-48bf-adcc-4a04ef10aa1c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beachbodyara/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-pbzeheo2.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
