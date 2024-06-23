export const countryAlertRequest = async () => {
    return await fetch(
        "http://apis.data.go.kr/1262000/CountrySafetyService3/getCountrySafetyList3?serviceKey=6ZdVJPQ0vVnGuX%2F2hzuPCIgAe4WLsJKKAnIQ7WZ9%2BNKyG6sDeOQ%2FroBV6Grooi%2Bglfu6vG3lzUHCUaNJl3IeyA%3D%3D&returnType=JSON&numOfRows=10&pageNo=1"
    );
};
