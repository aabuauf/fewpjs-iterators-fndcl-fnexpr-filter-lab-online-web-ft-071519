// Code your solution he
function findMatching(drivers,string){
  return drivers.filter(d=> {
    return d.touppercase()===string.touppercase()
  })
}