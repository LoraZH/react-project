export default function Contacts() {
    return (
        <>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n        }\n        .container {\n            width: 80%;\n            margin: 0 auto;\n        }\n        h1 {\n            text-align: center;\n            margin: 20px 0;\n        }\n        .contact-info {\n            display: flex;\n            justify-content: space-between;\n            margin-bottom: 40px;\n        }\n        .contact-info div {\n            flex: 1;\n            padding: 10px;\n        }\n        .contact-info div:first-child {\n            margin-right: 20px;\n        }\n        .contact-form {\n            display: flex;\n            flex-direction: column;\n        }\n        .contact-form input,\n        .contact-form textarea {\n            padding: 10px;\n            margin: 10px 0;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n            width: 100%;\n        }\n        .contact-form button {\n            padding: 10px;\n            border: none;\n            border-radius: 5px;\n            background-color: #333;\n            color: white;\n            cursor: pointer;\n            font-size: 16px;\n        }\n        .contact-form button:hover {\n            background-color: #555;\n        }\n        .map-container {\n            text-align: center;\n            margin-top: 20px;\n        }\n        iframe {\n            width: 100%;\n            height: 400px;\n            border: none;\n        }\n    "
    }}
  />
  <div className="p-4">
    <div className="contact-info">
      <div>
        <h2>Gallery Information</h2>
        <p>
          <strong>Address:</strong> Alceko 2, Plovdiv, Bulgaria
        </p>
        <p>
          <strong>Phone:</strong> +359 887 569 234
        </p>
        <p>
          <strong>Email:</strong> loraArtStore@gmail.com
        </p>
      </div>
      <div>
        <h2>Opening Hours</h2>
        <p>
          <strong>Monday - Friday:</strong> 10:00 AM - 6:00 PM
        </p>
        <p>
          <strong>Weekends:</strong> Closed
        </p>
      </div>
    </div>
  </div>
</>

        </>
    )
}