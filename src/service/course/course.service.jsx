


// https://httpbin.org/get



export const Coursesoutstanding =async()=>{
    const url = 'https://api.restful-api.dev/objects'

    const response = await fetch(`${url}`); // Gọi API nội bộ
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    return response.json();

    // return new Promise((resolve) =>{

    // })

}



export const Coursenew = async ()=> {
  return new ((resolve) => {
    const courses= [
      { id: 1, name: 'Course 1',price:2323,discount:223,status:1,images:'akjshdkjasdas',description:'aksjhdjkhsad',enrollment_count:2,prerequisites:2,id_chude:2,lecturer_id:2,category_subcategory:3,level_id:4 },
      // Thêm các khóa học khác nếu cần
    ];
    
    // Gọi resolve với mảng courses
    resolve(courses);
  });
}