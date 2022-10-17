import { MaglevSectionDefinition } from "~~/maglev-core/types";

type content = {
  id: string
  settings: {
    title: string
  }
} 

const definition: MaglevSectionDefinition = {
  "id": "feature_01",
  "name": "Content with USPs Grid",
  "category": "feature",
  "settings": [
    {
      "label": "Title",
      "id": "title",
      "type": "text",
      "default": "What makes us special"
    },
    {
      "label": "Body",
      "id": "body",
      "type": "text",
      "html": true,
      "lineBreak": true,
      "nbRows": 5,
      "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima."
    }
  ],
  "blocks": [
    {
      "name": "Feature",
      "type": "feature_item",
      "settings": [
        {
          "label": "Name",
          "id": "name",
          "type": "text",
          "default": "Lorem, ipsum dolor."
        },
        {
          "label": "Icon",
          "id": "icon",
          "type": "icon",
          "default": "ri-flask-line"
        },
        {
          "label": "Description",
          "id": "description",
          "type": "text",
          "nbRows": 4,
          "default": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
        }
      ]
    }
  ],
  "blocks_label": "List of features",
  "sample": {
    "settings": {
      "title": "What makes us special",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima."
    },
    "blocks": [
      {
        "type": "feature_item",
        "settings": {
          "name": "Lorem, ipsum dolor.",
          "icon": "ri-flask-line",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
        }
      },
      {
        "type": "feature_item",
        "settings": {
          "name": "Lorem, ipsum dolor.",
          "icon": "ri-flask-line",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
        }
      },
      {
        "type": "feature_item",
        "settings": {
          "name": "Lorem, ipsum dolor.",
          "icon": "ri-flask-line",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
        }
      },
      {
        "type": "feature_item",
        "settings": {
          "name": "Lorem, ipsum dolor.",
          "icon": "ri-flask-line",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
        }
      },
      {
        "type": "feature_item",
        "settings": {
          "name": "Lorem, ipsum dolor.",
          "icon": "ri-flask-line",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
        }
      },
      {
        "type": "feature_item",
        "settings": {
          "name": "Lorem, ipsum dolor.",
          "icon": "ri-flask-line",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
        }
      }
    ]
  }
}

export default MaglevSectionDefinition