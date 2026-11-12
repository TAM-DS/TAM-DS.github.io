import json
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]

class SiteTests(unittest.TestCase):
    def test_homepage_uses_canonical_message_and_demo(self):
        html = (ROOT/'index.html').read_text()
        self.assertIn('Understand the workflow.<br><em>Then build the AI.</em>', html)
        self.assertNotIn('Build the intelligence.', html)
        self.assertIn('href="demo.html"', html)
        self.assertNotIn('{{ASSET_VERSION}}', html)

    def test_every_demo_action_has_consistent_outcomes(self):
        data = json.loads((ROOT/'demo-fixtures.json').read_text())
        self.assertEqual(data['mode'], 'synthetic-precomputed')
        self.assertEqual(len(data['scenarios']), 4)
        for scenario in data['scenarios']:
            ids = [a['id'] for a in scenario['actions']]
            self.assertEqual(len(ids), len(set(ids)))
            for action in scenario['actions']:
                if action['requires_approval']:
                    self.assertTrue(action['without_approval'].startswith('DENIED:'))
                    self.assertTrue(action['with_approval'].startswith('[SIMULATED]'))

    def test_demo_assets_exist_and_scope_is_visible(self):
        for name in ['demo.html','demo.js','demo.css','demo-fixtures.json']:
            self.assertTrue((ROOT/name).is_file())
        html = (ROOT/'demo.html').read_text()
        self.assertIn('precomputed', html)
        self.assertIn('not authenticated authority', html)
