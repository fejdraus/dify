const translation = {
  title: 'Werkzeuge',
  createCustomTool: 'Eigenes Werkzeug erstellen',
  type: {
    all: 'Alle',
    builtIn: 'Integriert',
    custom: 'Benutzerdefiniert',
  },
  contribute: {
    line1: 'Ich interessiere mich dafür, ',
    line2: 'Werkzeuge zu Dify beizutragen.',
    viewGuide: 'Leitfaden anzeigen',
  },
  author: 'Von',
  auth: {
    unauthorized: 'Zur Autorisierung',
    authorized: 'Autorisiert',
    setup: 'Autorisierung einrichten, um zu nutzen',
    setupModalTitle: 'Autorisierung einrichten',
    setupModalTitleDescription: 'Nach der Konfiguration der Anmeldeinformationen können alle Mitglieder im Arbeitsbereich dieses Werkzeug beim Orchestrieren von Anwendungen nutzen.',
  },
  includeToolNum: '{{num}} Werkzeuge inkludiert',
  addTool: 'Werkzeug hinzufügen',
  createTool: {
    title: 'Eigenes Werkzeug erstellen',
    editAction: 'Konfigurieren',
    editTitle: 'Eigenes Werkzeug bearbeiten',
    name: 'Name',
    toolNamePlaceHolder: 'Geben Sie den Werkzeugnamen ein',
    schema: 'Schema',
    schemaPlaceHolder: 'Geben Sie hier Ihr OpenAPI-Schema ein',
    viewSchemaSpec: 'Die OpenAPI-Swagger-Spezifikation anzeigen',
    importFromUrl: 'Von URL importieren',
    importFromUrlPlaceHolder: 'https://...',
    urlError: 'Bitte geben Sie eine gültige URL ein',
    examples: 'Beispiele',
    exampleOptions: {
      json: 'Wetter(JSON)',
      yaml: 'Pet Store(YAML)',
      blankTemplate: 'Leere Vorlage',
    },
    availableTools: {
      title: 'Verfügbare Werkzeuge',
      name: 'Name',
      description: 'Beschreibung',
      method: 'Methode',
      path: 'Pfad',
      action: 'Aktionen',
      test: 'Test',
    },
    authMethod: {
      title: 'Autorisierungsmethode',
      type: 'Autorisierungstyp',
      keyTooltip: 'Http Header Key, Sie können es bei "Authorization" belassen, wenn Sie nicht wissen, was es ist, oder auf einen benutzerdefinierten Wert setzen',
      types: {
        none: 'Keine',
        api_key: 'API-Key',
        apiKeyPlaceholder: 'HTTP-Headername für API-Key',
        apiValuePlaceholder: 'API-Key eingeben',
      },
      key: 'Schlüssel',
      value: 'Wert',
    },
    authHeaderPrefix: {
      title: 'Auth-Typ',
      types: {
        basic: 'Basic',
        bearer: 'Bearer',
        custom: 'Benutzerdefiniert',
      },
    },
    privacyPolicy: 'Datenschutzrichtlinie',
    privacyPolicyPlaceholder: 'Bitte Datenschutzrichtlinie eingeben',
  },
  test: {
    title: 'Test',
    parametersValue: 'Parameter & Wert',
    parameters: 'Parameter',
    value: 'Wert',
    testResult: 'Testergebnisse',
    testResultPlaceholder: 'Testergebnis wird hier angezeigt',
  },
  thought: {
    using: 'Nutzung',
    used: 'Genutzt',
    requestTitle: 'Anfrage an',
    responseTitle: 'Antwort von',
  },
  setBuiltInTools: {
    info: 'Info',
    setting: 'Einstellung',
    toolDescription: 'Werkzeugbeschreibung',
    parameters: 'Parameter',
    string: 'Zeichenkette',
    number: 'Nummer',
    required: 'Erforderlich',
    infoAndSetting: 'Info & Einstellungen',
  },
  noCustomTool: {
    title: 'Keine benutzerdefinierten Werkzeuge!',
    content: 'Fügen Sie hier Ihre benutzerdefinierten Werkzeuge hinzu und verwalten Sie sie, um KI-Apps zu erstellen.',
    createTool: 'Werkzeug erstellen',
  },
  noSearchRes: {
    title: 'Leider keine Ergebnisse!',
    content: 'Wir konnten keine Werkzeuge finden, die Ihrer Suche entsprechen.',
    reset: 'Suche zurücksetzen',
  },
  builtInPromptTitle: 'Aufforderung',
  toolRemoved: 'Werkzeug entfernt',
  notAuthorized: 'Werkzeug nicht autorisiert',
  howToGet: 'Wie erhält man',
}

export default translation
