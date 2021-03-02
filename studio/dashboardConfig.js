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
                  buildHookId: '603e3bf4af2511008ef0d9fb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g3vf9pdz',
                  apiId: '6da6e593-6225-43b1-a12c-536278903710'
                },
                {
                  buildHookId: '603e3bf4103b680081ffd3df',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1ctrksup',
                  apiId: 'd9fe355e-9c92-44e1-a816-bc95e5b52ab6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dan9b6/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1ctrksup.netlify.app', category: 'apps'}
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
