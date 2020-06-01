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
                  buildHookId: '5ed48896987c7a2a343568b5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6ywbu9rh',
                  apiId: 'e3bda08e-ebe4-4343-a456-22a6d19dc5dc'
                },
                {
                  buildHookId: '5ed488961c84489fa9327ed5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-a6rjjk88',
                  apiId: 'a1e51789-8040-42c4-a95f-19f80d4cdfff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kkarkos/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-a6rjjk88.netlify.app', category: 'apps' }
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
