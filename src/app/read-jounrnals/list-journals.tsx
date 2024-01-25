interface Journal {
    id: number;
    abstract: string;
    title: string;
    // Sesuaikan dengan properti jurnal yang sesuai dengan data yang Anda terima dari server
}


const fetchCard = async () => {
    const response = await fetch("api/journals", {
      method: "GET"
    });
    const responseJson: Journal[] = await response.json();
  
    if (!response.ok) {
      throw new Error("Error Fetching Data journal");
    }
  
    return responseJson;
  };

export default async function GetJournal() {

    const journal = await fetchCard();

    return (
        <section className="flex flex-wrap">
      {journal.map((journal) => (
        <div key={journal.id} className="w-1/4 p-4">
          <div className="border rounded-md p-4">
            <h3 className="text-xl font-semibold">{journal.abstract}</h3>
            <p className="bg-gray-200 rounded-md text-sm">{journal.title}</p>
          </div>
        </div>
      ))}
    </section>
    );
}
