async function fetchData(delay) {
    return new Promise(resolve => setTimeout(() => resolve('Data fetched'), delay));
}

async function fetchAllData() {
    const dataSources = [fetchData(1000), fetchData(2000), fetchData(3000), fetchData(4000)];
    // let dataCount = 0;
    // for await (const data of dataSources) {
    //     dataCount++;
    //     console.log(data + dataCount);
    // }

    const data = await Promise.all(dataSources);
    console.log(data);
}

fetchAllData()