json.array!(@events) do |event|
  json.id event.id
  json.title event.title
  json.content event.contentcontent
  json.start event.start
  json.end event.end
end