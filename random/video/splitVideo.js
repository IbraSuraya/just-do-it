const video = 'DART OOP'    // Judul big video
const timeline = "00:00:00 - AAA\n" +
  "00:00:39 - BBB\n" +
  "00:02:02 - CCC"

const lines = timeline.split("\n")
const prefix = video.split(" ").join("-")
const folder = prefix


console.log(`mkdir -p "${folder}" &&\\`)
for (let i=0; i<lines.length; i++){
  let line = lines[i]
  let start = line.split("-")[0].trim()
  let end = "END"
  let title = line.split("-")[1].trim().split(" ").join("-")
  
  if (i !== (lines.length - 1)){
    end = lines[i+1].split("-")[0].trim();
  }
  
  let number = (i+1).toString().padStart(2, '0')
  if (end === "END"){
    console.log(`ffmpeg -i "${video}.mp4" -ss ${start} -c copy "${folder}/${prefix}-${number}-${title}.mp4"`)
  } else {
    console.log(`ffmpeg -i "${video}.mp4" -ss ${start} -to ${end} -c copy "${folder}/${prefix}-${number}-${title}.mp4" &&\\`)
  }
}