function mainLoad() {
  for (let i = 0; i < 100; i++) {
  $("body").append("Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam quasi aliquam eligendi, placeat qui corporis!")
  }
  interface Flight {
    flightId: string;
    airline: string;
    airport: string;
    scheduledTime: Date;
    estimatedTime: Date;
    status: string;
  }
  
  async function fetchFlightData(): Promise<Flight[]> {
    const url = 'https://flydata.avinor.no/XmlFeed.asp?TimeTo=8&airport=OSL&direction=D';
    const response = await fetch(url);
    const xmlText = await response.text();
    
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    
    const flights: Flight[] = [];
    const flightNodes = xmlDoc.getElementsByTagName('flight');
    for (let i = 0; i < flightNodes.length; i++) {
      const flightNode = flightNodes[i];
      const flight: Flight = {
        flightId: flightNode.getAttribute('id') ?? '',
        airline: flightNode.getAttribute('airline') ?? '',
        airport: flightNode.getAttribute('airport') ?? '',
        scheduledTime: new Date(flightNode.getAttribute('schedule_time') ?? ''),
        estimatedTime: new Date(flightNode.getAttribute('time') ?? ''),
        status: flightNode.getAttribute('status') ?? '',
      };
      flights.push(flight);
    }
    
    return flights;
  }
  console.log(fetchFlightData())
}