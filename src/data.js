const list = [
    {
        Id: 1,
        Customer: 'James PC Repair',
        Service: "AC Cleaning",
        Status: "Open",
        Created: new Date(),
        Location: '10006 N Dale Mabry, Tampa, Fl 33618',
        Assigned: 'Brian Baehr'
    },
    {
        Id: 2,
        Customer:"Bob Villa's remodeling",
        Service: "AC Cleaning",
        Status: "Closed",
        Created: new Date("2016-12-1 5:00"),
        Location: '123 flicka flacka ln',
        Assigned: 'Brian Leonard'  
    },
    {
        Id: 3,
        Customer:'John Carmack Paintball ltd.',
        Service: "AC Cleaning",
        Status: "Open",
        Created: new Date(),
        Location: '10006 N Dale Mabry, Tampa, Fl 33618',
        Assigned: 'Andrew Armstrong'
    },
    {
        Id: 4,
        Customer:'Jill Clothing Repair',
        Service: "AC Leak Repair",
        Status: "Pending",
        Created: new Date("2016-1-1 5:00"),
        Location: '8910 N Dale Mabry, Tampa, Fl',
        Assigned: 'Mitch Hastings'
    },
    {
        Id: 5,
        Customer:'Janet School for professional singers',
        Service: "Plumbing",
        Status: "Open",
        Created: new Date(),
        Location: '10006 N Dale Mabry, Tampa, Fl 33618',
        Assigned: 'Andrew Armstrong'
    },
    {
        Id: 6,
        Customer: "Jack College of Surgical Medicine",
        Status: "Closed",
        Created: new Date(),
        Location: '50 somewhereville, Ky 12345',
        Assigned: 'Juan Colina'
    }

]
let dataList = []
for(let i = 0; i < 10; i++){
  dataList = [...dataList, ...list]
}
//console.log(dataList.length)

export default dataList;