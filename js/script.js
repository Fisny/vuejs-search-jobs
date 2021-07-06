Vue.config.devtools = true;

new Vue ({
    el: '#app',
    data: {
        jobs: [
            {
              id: 1,
              company: 'Microsoft',
              position: 'Developer',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '5/22/2021',
              logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png',
              city: 'Roma',
              contract: 'Full Time'
            },
            {
              id: 2,
              company: 'Red Hat',
              position: 'Developer',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '2/22/2021',
              logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQEto-TydTTIfQ/company-logo_200_200/0/1556712048684?e=2159024400&v=beta&t=gKkSK5xViTuWTIMZSLpnpiNXMQ2Z1IdmPLYFanCsEag',
              city: 'Genova',
              contract: 'Full Time'
            },
            {
              id: 3,
              company: 'General Electric',
              position: 'Developer',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '5/22/2021',
              logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/General_Electric_logo.svg/1024px-General_Electric_logo.svg.png',
              city: 'Roma',
              contract: 'Full Time'
            },
            {
              id: 4,
              company: 'Leonardo',
              position: 'Developer',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '5/22/2021',
              logo: 'https://www.repstatic.it/content/nazionale/img/2016/08/24/103147840-e7eb392f-a847-4e3e-a4fd-504d167703f8.jpg',
              city: 'Roma',
              contract: 'Full Time'
            },
            {
              id: 5,
              company: 'ericsson',
              position: 'Developer',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '5/22/2021',
              logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFp4NCYZynPZQ/company-logo_200_200/0/1519855897171?e=2159024400&v=beta&t=0kAhKO-hvzzlIjX9yGKbb_NKU59UxBc4VBBCcz8qOoI',
              city: 'Roma',
              contract: 'Full Time'
            },
        ],
        starred: [1, 2, 3],
        applied: [4, 5]        
    }
})