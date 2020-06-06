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
                  buildHookId: '5edbbbfbeb4b84c5487c7650',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-mpk8s2oe',
                  apiId: '3153a30f-a1a7-4881-89c7-06d1bcd9100d'
                },
                {
                  buildHookId: '5edbbbfb3846e0a8cca232ac',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-veowi18y',
                  apiId: '9290886e-0483-41aa-8e72-7c4bab779226'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/updx/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-veowi18y.netlify.app', category: 'apps'}
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
