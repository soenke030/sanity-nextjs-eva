export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e78b3ca90508dcadda1fda9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-eva-studio',
                  apiId: 'ec7f1e2a-603c-479a-95bc-c62bd1993ddf'
                },
                {
                  buildHookId: '5e78b3cabe1baf342a7b3a98',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-eva',
                  apiId: '511521b6-b8c6-4970-b563-43ae5554b829'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/soenke030/sanity-nextjs-eva',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-eva.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
