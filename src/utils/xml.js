export default function (xmlString) {
  var xmlDoc = null

  if (!window.DOMParser && window.ActiveXObject) {
    var xmlDomVersions = [
      'MSXML.2.DOMDocument.6.0',
      'MSXML.2.DOMDocument.3.0',
      'Microsoft.XMLDOM'
    ]
    for (var i = 0; i < xmlDomVersions.length; i++) {
      try {
        xmlDoc = new window.ActiveXObject(xmlDomVersions[i])
        xmlDoc.async = false
        xmlDoc.loadXML(xmlString) // loadXML方法载入xml字符串
        break
      } catch (e) {}
    }
  } else if (
    window.DOMParser &&
        document.implementation &&
        document.implementation.createDocument
  ) {
    try {
      var domParser = new DOMParser()
      xmlDoc = domParser.parseFromString(xmlString, 'text/xml')
    } catch (e) {}
  } else {
    return null
  }

  var str = xmlDoc.getElementsByTagName('string')
  str = str.length > 0 ? str[0].childNodes[0].nodeValue : xmlString
  try {
    if (str) {
      str = JSON.parse(str)
    }
  } catch (e) {}

  return str
}
